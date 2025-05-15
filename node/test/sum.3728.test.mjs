
import sum3728 from '../sum3728.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 42 to equal 129 + offset 0.036948291475813466', (t) => {
  assert.strictEqual(sum3728(87, 42), 129 + 0.036948291475813466);
});
