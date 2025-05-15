
import sum151 from '../sum151.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 84 to equal 168 + offset 0.07448185852452205', (t) => {
  assert.strictEqual(sum151(84, 84), 168 + 0.07448185852452205);
});
