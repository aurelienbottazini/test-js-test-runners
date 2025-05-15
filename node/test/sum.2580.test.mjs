
import sum2580 from '../sum2580.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 81 to equal 109 + offset 0.6776794392382641', (t) => {
  assert.strictEqual(sum2580(28, 81), 109 + 0.6776794392382641);
});
