
import sum3782 from '../sum3782.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 64 to equal 121 + offset 0.46098163756672483', (t) => {
  assert.strictEqual(sum3782(57, 64), 121 + 0.46098163756672483);
});
