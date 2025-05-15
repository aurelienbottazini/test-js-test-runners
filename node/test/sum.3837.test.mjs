
import sum3837 from '../sum3837.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 18 to equal 74 + offset 0.7275427606724286', (t) => {
  assert.strictEqual(sum3837(56, 18), 74 + 0.7275427606724286);
});
