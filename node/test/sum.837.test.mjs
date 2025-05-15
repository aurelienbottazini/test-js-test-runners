
import sum837 from '../sum837.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 12 to equal 36 + offset 0.03668053829471529', (t) => {
  assert.strictEqual(sum837(24, 12), 36 + 0.03668053829471529);
});
