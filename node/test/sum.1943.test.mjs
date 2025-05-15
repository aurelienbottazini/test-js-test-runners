
import sum1943 from '../sum1943.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 99 to equal 183 + offset 0.8212381545927222', (t) => {
  assert.strictEqual(sum1943(84, 99), 183 + 0.8212381545927222);
});
