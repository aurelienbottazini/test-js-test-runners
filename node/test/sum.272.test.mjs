
import sum272 from '../sum272.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 81 to equal 123 + offset 0.5910498109187388', (t) => {
  assert.strictEqual(sum272(42, 81), 123 + 0.5910498109187388);
});
