
import sum3890 from '../sum3890.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 94 to equal 169 + offset 0.836787806926464', (t) => {
  assert.strictEqual(sum3890(75, 94), 169 + 0.836787806926464);
});
