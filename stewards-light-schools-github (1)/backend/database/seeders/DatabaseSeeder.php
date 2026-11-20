<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'CMS Administrator',
            'email' => 'admin@example.com',
        ]);

        $roles = [
            ['name' => 'Super Administrator', 'slug' => 'super-administrator'],
            ['name' => 'Content Editor', 'slug' => 'content-editor'],
            ['name' => 'Admissions Officer', 'slug' => 'admissions-officer'],
            ['name' => 'Finance Officer', 'slug' => 'finance-officer'],
        ];

        foreach ($roles as $role) {
            DB::table('roles')->updateOrInsert(['slug' => $role['slug']], [
                'name' => $role['name'], 'updated_at' => now(), 'created_at' => now(),
            ]);
        }

        $permissionSlugs = [
            'manage-users', 'manage-settings', 'manage-pages', 'manage-news',
            'manage-events', 'manage-media', 'manage-admissions', 'manage-contact',
            'manage-newsletter', 'manage-donations', 'view-audit-log',
        ];

        foreach ($permissionSlugs as $slug) {
            DB::table('permissions')->updateOrInsert(['slug' => $slug], [
                'name' => Str::of($slug)->replace('-', ' ')->title()->toString(),
                'updated_at' => now(), 'created_at' => now(),
            ]);
        }

        $admin = User::query()->where('email', 'admin@example.com')->firstOrFail();
        $superAdmin = DB::table('roles')->where('slug', 'super-administrator')->value('id');
        DB::table('role_user')->updateOrInsert(['role_id' => $superAdmin, 'user_id' => $admin->id]);

        foreach (DB::table('permissions')->pluck('id') as $permissionId) {
            DB::table('permission_role')->updateOrInsert([
                'role_id' => $superAdmin, 'permission_id' => $permissionId,
            ]);
        }
    }
}
