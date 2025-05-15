
import sum1693 from '../sum1693.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 6 to equal 89 + offset 0.2122118403935176', (t) => {
  assert.strictEqual(sum1693(83, 6), 89 + 0.2122118403935176);
});
