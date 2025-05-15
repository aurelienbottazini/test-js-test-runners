
import sum1382 from '../sum1382.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 87 to equal 108 + offset 0.5078576002613248', (t) => {
  assert.strictEqual(sum1382(21, 87), 108 + 0.5078576002613248);
});
