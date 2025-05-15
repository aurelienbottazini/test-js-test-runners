
import sum3557 from '../sum3557.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 84 to equal 132 + offset 0.01482161126119208', (t) => {
  assert.strictEqual(sum3557(48, 84), 132 + 0.01482161126119208);
});
