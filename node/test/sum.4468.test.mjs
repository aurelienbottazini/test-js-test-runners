
import sum4468 from '../sum4468.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 30 to equal 44 + offset 0.18381682299803837', (t) => {
  assert.strictEqual(sum4468(14, 30), 44 + 0.18381682299803837);
});
