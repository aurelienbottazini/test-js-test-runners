
import sum4381 from '../sum4381.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 72 to equal 168 + offset 0.3364901636723653', (t) => {
  assert.strictEqual(sum4381(96, 72), 168 + 0.3364901636723653);
});
