
import sum3075 from '../sum3075.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 81 to equal 110 + offset 0.642278223448296', (t) => {
  assert.strictEqual(sum3075(29, 81), 110 + 0.642278223448296);
});
