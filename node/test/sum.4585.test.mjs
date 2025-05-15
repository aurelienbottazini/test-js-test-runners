
import sum4585 from '../sum4585.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 62 to equal 79 + offset 0.6289986465154176', (t) => {
  assert.strictEqual(sum4585(17, 62), 79 + 0.6289986465154176);
});
