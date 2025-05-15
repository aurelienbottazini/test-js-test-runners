
import sum105 from '../sum105.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 0 to equal 76 + offset 0.9340757336271032', (t) => {
  assert.strictEqual(sum105(76, 0), 76 + 0.9340757336271032);
});
