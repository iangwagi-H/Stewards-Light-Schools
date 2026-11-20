<?php

use App\Models\NewsArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::get('/health', function () {
        return response()->json([
            'status' => 'ok',
            'service' => 'stewards-light-cms',
            'version' => 'v1',
        ]);
    });

    Route::get('/public/news', function (Request $request) {
        $perPage = min(max((int) $request->integer('per_page', 12), 1), 50);

        return NewsArticle::query()
            ->published()
            ->latest('published_at')
            ->paginate($perPage);
    });

    Route::middleware('auth:sanctum')->prefix('admin')->group(function (): void {
        Route::get('/me', function (Request $request) {
            return response()->json(['data' => $request->user()->load('roles')]);
        });
    });
});
