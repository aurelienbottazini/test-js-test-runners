
import sum2742 from '../sum2742.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 21 to equal 108 + offset 0.33767133965156604', (t) => {
  assert.strictEqual(sum2742(87, 21), 108 + 0.33767133965156604);
});
