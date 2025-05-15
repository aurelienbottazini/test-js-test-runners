
import sum3892 from '../sum3892.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 82 to equal 136 + offset 0.40675070193817053', (t) => {
  assert.strictEqual(sum3892(54, 82), 136 + 0.40675070193817053);
});
