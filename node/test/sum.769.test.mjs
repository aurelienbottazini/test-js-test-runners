
import sum769 from '../sum769.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 45 to equal 103 + offset 0.5266547673341662', (t) => {
  assert.strictEqual(sum769(58, 45), 103 + 0.5266547673341662);
});
