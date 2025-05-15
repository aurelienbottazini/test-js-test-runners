
import sum4148 from '../sum4148.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 8 to equal 104 + offset 0.224383097162014', (t) => {
  assert.strictEqual(sum4148(96, 8), 104 + 0.224383097162014);
});
