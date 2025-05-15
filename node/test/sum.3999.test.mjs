
import sum3999 from '../sum3999.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 99 to equal 185 + offset 0.5236376096019325', (t) => {
  assert.strictEqual(sum3999(86, 99), 185 + 0.5236376096019325);
});
