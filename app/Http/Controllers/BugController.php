<?php

namespace App\Http\Controllers;

use App\Bug;
use Illuminate\Http\Request;

class BugController extends Controller
{
    public function index()
    {
        $bugs = Bug::all();

        return response()
            ->json($bugs);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $bug = Bug::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
        ]);

        return response()->json('bug created!');
    }

    public function show($id)
    {
        $bug = Bug::find($id);

        if (! $bug) {
            return response()
            ->json(['error' => 'The bug is not exists']);
        }
        return response()
            ->json($bug);
    }

    public function edit($id)
    {
        $bug = Bug::find($id);
        if (! $bug) {
            return response()
            ->json(['error' => 'The bug is not exists']);
        }
        return response()
            ->json($bug);
    }

    public function update(Request $request, $id)
    {
        $bug = Bug::find($id);
        if (! $bug) {
            return response()
            ->json(['error' => 'Error: bug not found']);
        }
        $bug->update($request->all());
        return response()
            ->json(['message' => 'Success: You have updated the bug']);
    }

    public function destroy($id)
    {
        $bug = Bug::find($id);
        if (! $bug) {
            return response()
            ->json(['error' => 'Error: bug not found']);
        }
        $bug->delete();
        return response()
            ->json(['message' => 'Success: You have deleted the bug']);
    }
}
