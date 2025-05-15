
import sum2477 from '../sum2477.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 19 to equal 102 + offset 0.5161267982622256', (t) => {
  assert.strictEqual(sum2477(83, 19), 102 + 0.5161267982622256);
});
