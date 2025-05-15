
import sum500 from '../sum500.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 13 to equal 13 + offset 0.9229860074120216', (t) => {
  assert.strictEqual(sum500(0, 13), 13 + 0.9229860074120216);
});
