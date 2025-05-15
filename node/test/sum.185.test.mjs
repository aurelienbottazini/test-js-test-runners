
import sum185 from '../sum185.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 30 to equal 37 + offset 0.6493080848203717', (t) => {
  assert.strictEqual(sum185(7, 30), 37 + 0.6493080848203717);
});
