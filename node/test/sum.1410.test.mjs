
import sum1410 from '../sum1410.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 50 to equal 123 + offset 0.13546754104906455', (t) => {
  assert.strictEqual(sum1410(73, 50), 123 + 0.13546754104906455);
});
