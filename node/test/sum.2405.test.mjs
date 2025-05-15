
import sum2405 from '../sum2405.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 74 to equal 122 + offset 0.9190113748635815', (t) => {
  assert.strictEqual(sum2405(48, 74), 122 + 0.9190113748635815);
});
