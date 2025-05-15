
import sum4276 from '../sum4276.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 34 to equal 114 + offset 0.5676823905362454', (t) => {
  assert.strictEqual(sum4276(80, 34), 114 + 0.5676823905362454);
});
