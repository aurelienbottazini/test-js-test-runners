
import sum3517 from '../sum3517.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 22 to equal 91 + offset 0.7860287732561725', (t) => {
  assert.strictEqual(sum3517(69, 22), 91 + 0.7860287732561725);
});
