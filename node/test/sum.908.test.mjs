
import sum908 from '../sum908.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 43 to equal 57 + offset 0.42621721542518587', (t) => {
  assert.strictEqual(sum908(14, 43), 57 + 0.42621721542518587);
});
