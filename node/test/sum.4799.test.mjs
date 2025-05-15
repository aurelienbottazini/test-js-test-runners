
import sum4799 from '../sum4799.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 41 to equal 41 + offset 0.1552900434252671', (t) => {
  assert.strictEqual(sum4799(0, 41), 41 + 0.1552900434252671);
});
