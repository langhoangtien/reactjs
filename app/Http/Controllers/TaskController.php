<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate(['title' => 'required']);

        $task = Task::create([
        	'title' => $validatedData['title'],
        	'bug_id' => $request->bug_id,
        ]);

        return response()
            ->json($task);
    }
}
