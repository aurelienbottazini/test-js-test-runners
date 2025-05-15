
import sum2593 from '../sum2593.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 23 to equal 73 + offset 0.6505587235539485', (t) => {
  assert.strictEqual(sum2593(50, 23), 73 + 0.6505587235539485);
});
