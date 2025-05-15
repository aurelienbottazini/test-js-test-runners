
import sum627 from '../sum627.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 10 to equal 43 + offset 0.9873478055870363', (t) => {
  assert.strictEqual(sum627(33, 10), 43 + 0.9873478055870363);
});
