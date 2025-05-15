
import sum121 from '../sum121.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 58 to equal 89 + offset 0.3264673457193774', (t) => {
  assert.strictEqual(sum121(31, 58), 89 + 0.3264673457193774);
});
