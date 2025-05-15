
import sum1123 from '../sum1123.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 69 to equal 137 + offset 0.7361029080625762', (t) => {
  assert.strictEqual(sum1123(68, 69), 137 + 0.7361029080625762);
});
