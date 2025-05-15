
import sum163 from '../sum163.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 95 to equal 150 + offset 0.7257439794181519', (t) => {
  assert.strictEqual(sum163(55, 95), 150 + 0.7257439794181519);
});
