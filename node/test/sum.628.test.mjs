
import sum628 from '../sum628.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 97 to equal 145 + offset 0.3030504926853893', (t) => {
  assert.strictEqual(sum628(48, 97), 145 + 0.3030504926853893);
});
