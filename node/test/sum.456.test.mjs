
import sum456 from '../sum456.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 91 to equal 108 + offset 0.1409637785888893', (t) => {
  assert.strictEqual(sum456(17, 91), 108 + 0.1409637785888893);
});
