
import sum4014 from '../sum4014.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 61 to equal 78 + offset 0.9986793162007064', (t) => {
  assert.strictEqual(sum4014(17, 61), 78 + 0.9986793162007064);
});
