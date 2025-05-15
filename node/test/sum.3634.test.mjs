
import sum3634 from '../sum3634.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 87 to equal 107 + offset 0.10754344263125615', (t) => {
  assert.strictEqual(sum3634(20, 87), 107 + 0.10754344263125615);
});
