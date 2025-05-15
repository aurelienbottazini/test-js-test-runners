
import sum4643 from '../sum4643.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 66 to equal 97 + offset 0.7011506895725736', (t) => {
  assert.strictEqual(sum4643(31, 66), 97 + 0.7011506895725736);
});
