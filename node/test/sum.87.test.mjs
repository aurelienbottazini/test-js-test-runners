
import sum87 from '../sum87.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 10 to equal 29 + offset 0.17726183244565363', (t) => {
  assert.strictEqual(sum87(19, 10), 29 + 0.17726183244565363);
});
