
import sum3539 from '../sum3539.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 68 to equal 85 + offset 0.1992158552392983', (t) => {
  assert.strictEqual(sum3539(17, 68), 85 + 0.1992158552392983);
});
