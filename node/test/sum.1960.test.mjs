
import sum1960 from '../sum1960.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 62 to equal 101 + offset 0.5874137077454348', (t) => {
  assert.strictEqual(sum1960(39, 62), 101 + 0.5874137077454348);
});
