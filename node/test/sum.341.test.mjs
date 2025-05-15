
import sum341 from '../sum341.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 28 to equal 69 + offset 0.29701308943284876', (t) => {
  assert.strictEqual(sum341(41, 28), 69 + 0.29701308943284876);
});
