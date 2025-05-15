
import sum1825 from '../sum1825.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 91 to equal 143 + offset 0.3119926606587624', (t) => {
  assert.strictEqual(sum1825(52, 91), 143 + 0.3119926606587624);
});
