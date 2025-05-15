
import sum4850 from '../sum4850.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 65 to equal 110 + offset 0.24742602327875185', (t) => {
  assert.strictEqual(sum4850(45, 65), 110 + 0.24742602327875185);
});
