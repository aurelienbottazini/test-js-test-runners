
import sum785 from '../sum785.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 16 to equal 35 + offset 0.7449658686798564', (t) => {
  assert.strictEqual(sum785(19, 16), 35 + 0.7449658686798564);
});
