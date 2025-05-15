
import sum353 from '../sum353.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 29 to equal 61 + offset 0.1352641869876995', (t) => {
  assert.strictEqual(sum353(32, 29), 61 + 0.1352641869876995);
});
