
import sum3780 from '../sum3780.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 55 to equal 117 + offset 0.24342275462008134', (t) => {
  assert.strictEqual(sum3780(62, 55), 117 + 0.24342275462008134);
});
