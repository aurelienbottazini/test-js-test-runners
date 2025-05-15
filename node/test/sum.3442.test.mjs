
import sum3442 from '../sum3442.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 3 to equal 97 + offset 0.5920724185691432', (t) => {
  assert.strictEqual(sum3442(94, 3), 97 + 0.5920724185691432);
});
